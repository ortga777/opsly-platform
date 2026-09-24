export type OpslySession = {
  userId: string;
  email: string;
  name: string;
  workspaceId: string;
};

export function getSession(): OpslySession | null {
  return null;
}

export function requireSession(): OpslySession {
  const session = getSession();
  if (!session) throw new Error("UNAUTHENTICATED");
  return session;
}
