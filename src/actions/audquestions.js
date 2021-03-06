export const SUBMITAUDQUESTION = 'SUBMITAUDQUESTION';
export const SETAUDQUESTIONS = 'SETAUDQUESTIONS';
export const UPVOTEAUDQUESTION = 'UPVOTEAUDQUESTION';

export function setAudQuestions(audQuestions) {
  return {
    type: SETAUDQUESTIONS,
    audQuestions: audQuestions
  };
}

export function submitAudQuestion(audQuestion) {
  return {
    type: SUBMITAUDQUESTION,
    audQuestion: audQuestion
  };
}

export function upvoteAudQuestion(audQuestion) {
  return {
    type: UPVOTEAUDQUESTION,
    audQuestion: audQuestion
  };
}
