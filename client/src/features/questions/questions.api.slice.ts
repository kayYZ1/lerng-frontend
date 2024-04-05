import { authApi } from "features/api/auth.api";

export const modulesApiSlice = authApi.injectEndpoints({
	endpoints: (builder) => ({
		AddQuestion: builder.mutation({
			query: ({ topicId, data }) => ({
				url: `/questions/add/${topicId}`,
				method: "POST",
				body: data,
			}),
		}),
		GetQuestions: builder.query({
			query: (topicId: string) => ({
				url: `/questions/${topicId}`,
				method: "GET",
			}),
		}),
    SolveQuestion: builder.mutation({
      query: ({ topicId, data }) => ({
        url: `/questions/solve/${topicId}`,
        method: "POST",
        body: data
      })
    })
	}),
});

export const { useAddQuestionMutation, useGetQuestionsQuery } = modulesApiSlice;
