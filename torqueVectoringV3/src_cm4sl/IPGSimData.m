figure('Name', 'SkidPad Yaw Rate Comparison')
subplot(2,1,1)
plot(fb_tv_off, 'r')
hold
plot(ref_tv_off, '--r')
xlabel('Time (s)')
ylabel('Yaw rate (rad/s)')
title('Skidpad - TV OFF')
legend('Actual Yaw Rate','Reference Yaw Rate')
subplot(2,1,2)
plot(fb_tv_on, 'b')
hold
plot(ref_tv_on, '--b')
xlabel('Time (s)')
ylabel('Yaw rate (rad/s)')
title('Skidpad - TV ON')
legend('Actual Yaw Rate','Reference Yaw Rate')

figure('Name','Skidpad Path Comparison')