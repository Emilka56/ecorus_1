export type AuthStep = 'auth' | 'sms' | 'code' | 'partner';

export interface AuthFormProps {
  onSms: () => void;
  onPartner: () => void;
  onError: (msg: string) => void;
  onSuccess: () => void;
}

export interface SmsFormProps {
  onGetCode: () => void;
  onBack: () => void;
  onPartner: () => void;
}

export interface CodeFormProps {
  phone: string;
  onSuccess: () => void;
  onError: (msg: string) => void;
  onBack: () => void;
  onPartner: () => void;
}

export interface PartnerFormProps {
  onBack: () => void;
} 