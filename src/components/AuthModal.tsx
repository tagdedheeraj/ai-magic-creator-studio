
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

interface AuthModalProps {
  mode: 'login' | 'signup';
  onClose: () => void;
  onSuccess: () => void;
  onSwitchMode: (mode: 'login' | 'signup') => void;
}

const AuthModal = ({ mode, onClose, onSuccess, onSwitchMode }: AuthModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (mode === 'signup') {
      if (!formData.name || !formData.email || !formData.password) {
        toast.error("सभी fields भरना जरूरी है!");
        setLoading(false);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords match नहीं कर रहे!");
        setLoading(false);
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        toast.error("Email और password भरें!");
        setLoading(false);
        return;
      }
    }

    // Simulate API call
    setTimeout(() => {
      toast.success(mode === 'login' ? "Successfully logged in!" : "Account created successfully!");
      setLoading(false);
      onSuccess();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-700 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>
        
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            {mode === 'login' ? 'Welcome Back!' : 'Join Our Creative Community'}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {mode === 'login' 
              ? 'अपने account में login करें' 
              : 'Free account बनाएं और AI की शक्ति को unlock करें'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="आपका नाम"
                    className="pl-10 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            
            {mode === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2"
              disabled={loading}
            >
              {loading ? 'Processing...' : (mode === 'login' ? 'Login करें' : 'Account बनाएं')}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {mode === 'login' ? 'Account नहीं है?' : 'Already have an account?'}
              {' '}
              <Button
                variant="link"
                className="text-purple-400 hover:text-purple-300 p-0"
                onClick={() => onSwitchMode(mode === 'login' ? 'signup' : 'login')}
              >
                {mode === 'login' ? 'Sign up करें' : 'Login करें'}
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
