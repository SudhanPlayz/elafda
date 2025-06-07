export type ReactionType = "LIKE" | "DISLIKE" | "FIRE" | "HEART" | "CRY";

export interface Reaction {
  id: string;
  type: ReactionType;
  userId: string;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ReactionCounts = Record<ReactionType, number>

export interface ReactionData {
  counts: ReactionCounts;
  userReaction: ReactionType | null;
}

export const REACTION_EMOJIS: Record<ReactionType, string> = {
  LIKE: "👍",
  DISLIKE: "👎",
  FIRE: "🔥",
  HEART: "❤️",
  CRY: "😭",
};

export const REACTION_LABELS: Record<ReactionType, string> = {
  LIKE: "Like",
  DISLIKE: "Dislike",
  FIRE: "Fire",
  HEART: "Love",
  CRY: "Sad",
};
