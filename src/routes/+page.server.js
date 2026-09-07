import { error } from '@sveltejs/kit';

const latitude = 43.17;
const longitude = -77.62;

export async function load({ fetch }) {
	const params = new URLSearchParams({
		latitude: String(latitude),
		longitude: String(longitude),
		current: ['weather_code', 'wind_speed_10m'].join(','),
		temperature_unit: 'fahrenheit',
		wind_speed_unit: 'mph',
		timezone: 'America/New_York'
	});

	const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);

	if (!response.ok) {
		throw error(response.status, 'Unable to load weather data');
	}

	return {
		weather: await response.json()
	};
}
