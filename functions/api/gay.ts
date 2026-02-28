interface ErrorResponse {
	message: string;
	status_code: number;
}

const json_response = async <T>(
	body: T,
	status_code: number,
): Promise<Response> => {
	return new Response(JSON.stringify(body), {
		headers: { "Content-Type": "application/json" },
		status: status_code,
	});
};

const error_response = async (
	message: string,
	status_code: number,
): Promise<Response> => {
	const response: ErrorResponse = {
		message: message,
		status_code: status_code,
	};

	return json_response(response, status_code);
};

export const onRequest = async (context: {
	request: Request;
}): Promise<Response> => {
	const { request } = context;

	const method = request.method;
	const url = request.url;
	const uri = new URL(url);

	const params = uri.searchParams;
	const page = params.get("page") || "0";
	const limit = params.get("limit") || "10";
	const tags = params.get("tags") || "yaoi+-shota";

	const safebooru_url = `https://safebooru.org/index.php?page=dapi&s=post&q=index&limit=${limit}&json=1&tags=${tags}&pid=${page}`;

	if (method !== "GET") {
		return error_response("Method not allowed", 405);
	}

	const response = await fetch(safebooru_url);
	const data = await response.json();

	return json_response(data, 200);
};
