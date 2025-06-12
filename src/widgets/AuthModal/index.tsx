import { useState } from 'react';
import { AuthForm } from './components/AuthForm';
import { SmsForm } from './components/SmsForm';
import { CodeForm } from './components/CodeForm';
import { PartnerForm } from './components/PartnerForm';
import type { AuthStep } from '../types/auth';
import styles from './index.module.scss';

interface AuthModalProps {
  onClose: () => void;
}

export const AuthModal = ({ onClose }: AuthModalProps) => {
    const [step, setStep] = useState<AuthStep>("auth");
    const [phone, setPhone] = useState("");

    const handleToSms = () => setStep("sms");
    const handleToCode = () => setStep("code");
    const handleToPartner = () => setStep("partner");
    const handleBack = () => setStep("auth");

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <button className={styles.close} onClick={onClose}>×</button>
                {step === "auth" && (
                    <AuthForm
                        onSms={handleToSms}
                        onPartner={handleToPartner}
                        onError={console.error}
                        onSuccess={onClose}
                    />
                )}
                {step === "sms" && (
                    <SmsForm
                        onGetCode={handleToCode}
                        onBack={handleBack}
                        onPartner={handleToPartner}
                    />
                )}
                {step === "code" && (
                    <CodeForm
                        phone={phone}
                        onSuccess={onClose}
                        onError={console.error}
                        onBack={handleBack}
                        onPartner={handleToPartner}
                    />
                )}
                {step === "partner" && (
                    <PartnerForm onBack={handleBack} />
                )}
            </div>
        </div>
    );
};
