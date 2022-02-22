%Team Swinburne - Software - Torque VectoringParameters
%Author: Jeremy Carlisle, 100592552
%******** Rev 2 ********
%
%
%clc
%clear
%Vehicle Characteristics
t = 1.1;    %Wheel track width (m)
a = 0.8;    %distance front axle to CG (m)
b = 1.0;    %distance rear axle to CG (m)
L = a+b;    %distance front to rear axle (m)
c = 1.0;    %distance left wheel pivot axis to right wheel pivot axis (m)
h = 0.4;    %distance ground surface to CG (m)
r = 0.22;   %wheel radius (m)
%
W = 250*9.81;    %vehicle mass (N)
Wf = 100*9.81;   %vehicle mass on front wheels (N)
Wr = 150*9.81;   %vehicle mass on rear wheels (N)
%
Tmaxf = 250; %maximum available torque front (Nm)
Tmaxr = 250; %maximum available torque rear (Nm)


%Dynamic Test Data
Time = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Dynamics','B4:B164' ); %Time (sec)
V = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Dynamics','C4:C164' ); %velocity km/h
Delta = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Dynamics','D4:D164' ); %steering angle degrees
Delta = Delta+50;
%Ackerman lookup table data
DeltaT = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Steering','K2:K55' ); %steering angle degrees
Delta11T = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Steering','L2:L55' ); %steering angle degrees
Delta12T = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Steering','M2:M55' ); %steering angle degrees

Ay = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Dynamics','E4:E164' ); %lateral acceleration m/s^2
R = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Dynamics','F4:F164' ); %turning radius m
Omega = xlsread('TV Dynamic Test data_EXCEL.xlsx', 'Dynamics','K4:K164' ); %wheel speed rad/s

%test data
%Ay = -5*0.101972;  %Lateral acceleration in G-units
%w11 = 87;
%w12 = 100;
%w21 = 80;
%w22 = 95;
%Delta11 = 0.26;
%Delta12 = 0.22;
%Delta = 0.1;