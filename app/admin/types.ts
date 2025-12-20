export type Message = {
  id: number;
  created_at: string;
  text: string;
};

export type Person = {
  id: string;
  name: string;
  role: "leader" | "girl" | "boy";
  count: number;
};
