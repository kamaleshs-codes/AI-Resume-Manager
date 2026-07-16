import { AuthenticatedUser } from "../modules/auth/interfaces/authenticated-user.interface.ts.ts";

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}
export {};
