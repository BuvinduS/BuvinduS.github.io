export async function POST(req) {
  try {
    const body = await req.json();

    const formData = new URLSearchParams({
      name: body.name,
      email: body.email,
      message: body.message,
      secret: "BUVINDU'S_FORM",
    });

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyp9VT-6bDVUutDgFU0wnLFQaGrSG5rQu0hxiMzLzJsFdqW74aPUQXORMb_tNwQkjSy/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }
    );

    const data = await response.text();

    return new Response(JSON.stringify({ result: "success", data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ result: "error", message: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
