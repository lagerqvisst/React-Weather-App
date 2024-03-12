export function WeatherAPI(city, apiKey) {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    return fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const { location, current } = data;
            const { name } = location;
            const { temp_c, condition } = current;
            const { text, icon } = condition; // Lägger till ikoninformationen här

            return { city: name, temperature: temp_c, condition: text, icon: icon }; // Inkluderar ikoninformationen i returvärdet
        });
}
