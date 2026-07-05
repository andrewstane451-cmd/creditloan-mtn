export async function POST(request) {
  try {
    const { to, message } = await request.json();

    const body = new URLSearchParams({
      username: 'Lating',
      to,
      message,
    });

    const response = await fetch(
      "https://api.africastalking.com/version1/messaging",
      {
        method: "POST",
        headers: {
          apiKey: 'atsk_c000e4fb91be5448783c82eb58b2236c27332676f19106f3e0043007f9ee15667a73e0db',
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
      }
    );

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
