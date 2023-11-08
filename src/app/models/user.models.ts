export interface CustomUserFirebase {
    password?: string;
    firstName?: string;
    lastName?: string;
    shortName?: string;
    roles: string[];
    registrationCode?: string;
  
    // Firebase
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
    uid: string;
  }