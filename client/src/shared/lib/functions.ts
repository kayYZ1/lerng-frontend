import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const ParseDate = (date: Date) => {
	const newDate = new Date(date);
	const dateParsed = newDate.toISOString().split("T")[0];

	return dateParsed;
};

export function isFetchBaseQueryError(
	error: unknown
): error is FetchBaseQueryError {
	return typeof error === "object" && error != null && "status" in error;
}

export function isErrorWithMessage(
	error: unknown
): error is { message: string } {
	return (
		typeof error === "object" &&
		error != null &&
		"message" in error &&
		typeof (error as any).message === "string"
	);
}

export function apiError(
	error: FetchBaseQueryError | SerializedError | undefined
) {
	if (isFetchBaseQueryError(error)) {
		const errorMessage =
			"error" in error ? error.error : JSON.stringify(error.data);
		return errorMessage;
	} else if (isErrorWithMessage(error)) {
		return error.message;
	} else {
		return "Weird error has occured.";
	}
}
