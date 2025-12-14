import React, { useState, useEffect } from 'react';
import { Lock, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';

interface PinAuthProps {
  onAuthenticated: () => void;
}

export const PinAuth: React.FC<PinAuthProps> = ({ onAuthenticated }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // HARDCODED PIN - Change this to whatever you want
  const CORRECT_PIN = '000000';

  const verifyPin = (inputPin: string) => {
    if (inputPin === CORRECT_PIN) {
      setIsLoading(true);
      // Simulate a brief loading for UX (so user sees the 6th dot entered)
      setTimeout(() => {
        onAuthenticated();
      }, 600);
    } else {
      setIsLoading(true);
      setTimeout(() => {
         setError(true);
         setPin('');
         setIsLoading(false);
      }, 400);
    }
  };

  useEffect(() => {
    if (pin.length === 6) {
      verifyPin(pin);
    }
  }, [pin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length === 6 && !isLoading) {
      verifyPin(pin);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Technocenter QC Hub</h2>
          <p className="text-slate-500 text-sm mb-8">Dokumen ini bersifat rahasia/internal. Masukkan PIN untuk melanjutkan.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  if (e.target.value.length <= 6) {
                    setPin(e.target.value);
                    setError(false);
                  }
                }}
                disabled={isLoading}
                className="block w-full text-center text-2xl tracking-[0.5em] font-bold py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all placeholder-slate-300 disabled:opacity-50 disabled:bg-slate-50"
                placeholder="••••••"
                inputMode="numeric"
                maxLength={6}
                autoFocus
              />
            </div>

            {error && (
              <div className="flex items-center justify-center text-red-500 text-sm animate-pulse">
                <AlertCircle className="w-4 h-4 mr-1" />
                PIN Salah. Silakan coba lagi.
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || pin.length < 6}
              className={`w-full font-bold py-3 rounded-xl transition-all flex items-center justify-center ${
                isLoading || pin.length < 6
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Memverifikasi...
                </>
              ) : (
                <>
                  Masuk
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400">© Technocenter Quality Assurance</p>
        </div>
      </div>
    </div>
  );
};