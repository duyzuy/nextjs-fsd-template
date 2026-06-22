export class HttpError extends Error {
	constructor(
		public status: number,
		public code: string,
		message: string,
		public meta: unknown,
	) {
		super(message);
		this.name = "HttpError";
		this.status = status;
		this.code = code;
		this.meta = meta;

		Object.setPrototypeOf(this, new.target.prototype);

		// Proper stack trace (Node.js)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, HttpError);
		}
	}
}
