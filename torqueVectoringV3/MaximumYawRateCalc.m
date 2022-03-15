%Defining maximum delta values for steering
DeltaOuter = 25.52;
DeltaInner = 29.62;

L = 1.8; %Car track length

V = 1:2:100; %Velocities to be plotted

u = 0.9; %Coefficient of friction
g = 9.81;

YRGeometric = (V.*(DeltaInner - DeltaOuter)/2)/L * (180/pi);

YRFriction = (180/pi)*(u*g)./V;

hold on
plot(V,YRGeometric,'b.')
plot(V,YRFriction, 'g.')
plot(V,min(YRGeometric, YRFriction))
hold off