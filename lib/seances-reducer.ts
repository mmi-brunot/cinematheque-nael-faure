// H5 : un état avec des actions nommées. La logique est testable sans React.
export type SeancesAction =
  | { type: "add"; filmId: string }
  | { type: "remove"; filmId: string }
  | { type: "clear" };

export function seancesReducer(state: string[], action: SeancesAction): string[] {
  switch (action.type) {
    case "add":
      return state.includes(action.filmId) ? state : [...state, action.filmId];
    case "remove":
      return state.filter((id) => id !== action.filmId);
    case "clear":
      return [];
  }
}
