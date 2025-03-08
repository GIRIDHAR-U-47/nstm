
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get order info from location state
  const orderNumber = location.state?.orderNumber || 'Unknown';
  const total = location.state?.total || 0;
  
  // If someone visits this page directly without an order, redirect to home
  useEffect(() => {
    if (!location.state) {
      navigate('/', { replace: true });
    }
  }, [location.state, navigate]);
  
  if (!location.state) {
    return null; // Return early while redirect happens
  }
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16 flex items-center justify-center bg-background">
        <div className="container max-w-md">
          <div className="bg-card border border-primary/30 rounded-lg p-8 text-center animate-slide-up relative overflow-hidden">
            <div className="absolute top-5 right-5 opacity-30 pointer-events-none">
              <img 
                src="/lovable-uploads/258448d8-c0fb-47e6-818c-bd07111c77e2.png" 
                alt="" 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 rounded-full p-4">
                <CheckCircle className="h-16 w-16 text-primary animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-2 text-primary">Order Placed Successfully!</h1>
            <p className="text-muted-foreground mb-6">
              Your order has been received and is now being processed.
            </p>
            
            <div className="bg-muted/50 p-4 rounded-md mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Order Number:</span>
                <span>{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total Amount:</span>
                <span className="text-primary">₹{total}/-</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              You will receive a confirmation shortly. Thank you for ordering with NSTM!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary/10">
                <Link to="/menu">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Order More
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border">
              <div className="text-xs text-muted-foreground">
                NSTM - Namaku Soru Than Mukiyam
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderSuccess;
