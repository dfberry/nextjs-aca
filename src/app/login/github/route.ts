import { generateState } from "arctic";
import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
	const state = generateState();

	console.log("GET /login/github", { state});

	cookies().set("github_oauth_state", state, {
		path: "/",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax"
	});

	return Response.redirect("/");
}
