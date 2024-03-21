import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../api/base.api";

export const authApi = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (_builder) => ({}),
});
