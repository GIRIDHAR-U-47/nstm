
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, MinusCircle, ShoppingCart } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface MenuItemCardProps {
  item: MenuItem;
  featured?: boolean;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useCart();
  
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;
  
  const handleAddToCart = () => {
    addToCart(item);
  };
  
  const placeholderImage = '/placeholder.svg';
  
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 group h-full flex flex-col",
        featured ? "border-accent/20" : "border-border/50",
        isHovered ? "shadow-lg translate-y-[-4px]" : "shadow-sm",
        "hover:border-accent/40 backdrop-blur-sm bg-background/80"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <div 
          className={cn(
            "absolute inset-0 bg-background/5 transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={item.image || placeholderImage}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
          onError={(e) => {
            e.currentTarget.src = placeholderImage;
          }}
        />
        
        {featured && (
          <div className="absolute top-2 right-2">
            <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full animate-pulse">
              Popular
            </span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-base">{item.name}</h3>
          <div className="font-semibold text-right">
            ₹{item.price}
          </div>
        </div>
        
        {item.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {item.description}
          </p>
        )}
        
        <div className="mt-auto">
          {isInCart ? (
            <div className="flex items-center justify-between">
              <Button
                size="sm"
                variant="outline"
                className="h-8 px-2"
                onClick={() => decreaseQuantity(item.id)}
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
              
              <span className="mx-2 font-medium">{quantity}</span>
              
              <Button
                size="sm"
                variant="outline"
                className="h-8 px-2"
                onClick={() => increaseQuantity(item.id)}
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              className="w-full group transition-all" 
              onClick={handleAddToCart}
              variant="default"
            >
              <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;
