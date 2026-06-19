import { createServer } from "http";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => {
		console.log(req.url);
		if (req.url === "/api/sse") {
			console.log("sse-event");

			res.writeHead(200, {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache",
				Connection: "keep-alive",
				"Access-Control-Allow-Origin": "*",
			});

			const intervalId = setInterval(() => {
				res.write(`data: ${JSON.stringify({ message: "hello from server" })}\n\n`);
			}, 3000);

			req.on("close", () => {
				clearInterval(intervalId);
			});
		} else {
			handle(req, res);
		}
	}).listen(port);

	console.log(
		`> Server listening at http://localhost:${port} as ${
			dev ? "development" : process.env.NODE_ENV
		}`,
	);
});
