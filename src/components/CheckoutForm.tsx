
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm: React.FC = () => {
  const { cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentChange = (value: string) => {
    setFormData(prev => ({ ...prev, paymentMethod: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: 'Incomplete information',
        description: 'Please fill all the required fields',
        variant: 'destructive',
      });
      return;
    }
    
    // Simulate an order process
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: 'Order Placed Successfully!',
        description: 'Your delicious food is on the way',
      });
      
      clearCart();
      setIsSubmitting(false);
      
      // Navigate to success page
      navigate('/order-success', { 
        state: { 
          orderNumber: `FD${Math.floor(Math.random() * 10000)}`,
          total: cartTotal + 50
        } 
      });
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="9876543210"
          required
          type="tel"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="address">Delivery Address</Label>
        <Textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Your full delivery address"
          required
        />
      </div>
      
      <div className="space-y-3">
        <Label>Payment Method</Label>
        <RadioGroup 
          value={formData.paymentMethod} 
          onValueChange={handlePaymentChange}
        >
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="cod" id="cod" />
            <Label htmlFor="cod" className="cursor-pointer">Cash on Delivery</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-3">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online" className="cursor-pointer">Online Payment</Label>
          </div>
        </RadioGroup>
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </form>
  );
};

export default CheckoutForm;
