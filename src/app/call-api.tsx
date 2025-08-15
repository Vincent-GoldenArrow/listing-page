// utils/report.ts
export async function handleReportFetch() {
  try {
    const response = await fetch(`http://192.168.150.211:3000/play-free-game`, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}