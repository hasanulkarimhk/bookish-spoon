import numpy as np
import matplotlib.pyplot as plt

a1 = np.array([3, 5, 7, 3])
# [3 5 7 3]

a2 = np.zeros(10)
# [0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]


a3 = np.ones(20)
# [1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]

a4 = np.random.random(10)
# [0.13945939 0.30731919 0.34607869 0.6134784  0.16160069 0.59006081  0.94381065 0.20595763 0.44479108 0.63988776]


a5 = np.random.randn(10)
# [ 1.52045064 -0.4403673   0.80713863  0.29689138 -2.23002135 -1.60610004 -0.80894452  0.37005483 -0.07657133 -0.72359367]


a6 = np.linspace(0,10,20) #This means I want 0 to 10 ranged 20 values.
# [ 0.          0.52631579  1.05263158  1.57894737  2.10526316  2.63157895  3.15789474  3.68421053  4.21052632  4.73684211  5.26315789  5.78947368  6.31578947  6.84210526  7.36842105  7.89473684  8.42105263  8.94736842  9.47368421 10.        ]




a7 = np.linspace(0,10,5) #This means I want 0 to 10 ranged 20 values.
# [ 0.   2.5  5.   7.5 10. ]

a8 = np.arange(0, 200000, 2)
# [ 0  2  4  6  8 10 12 14 16 18]

a9 = a1*2
# [ 6 10 14  6]


a10 = a1>4
# [False  True  True False]

a11 = a1[a1>4] #Here is a thought: This operations makes think, so that, we can make a list of array then put a condition inside [] and only condition matched numbers will be selected. That's cool as fuck bro! xx.
# [5 7]

a12 = (1/a1 +2) # This can be used for ploting too.
# [2.33333333 2.2  2.14285714 2.33333333]

x = np.linspace(0,10,100)


plt.plot(x, x**2)

# plt.show()

y = np.arange(0,30,2)

plt.plot(y, y**2)

# plt.show()

# As I have used lpt.show() command twice, it showed both graphs chronologically

plt.hist(a4)
plt.show()


import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)

plt.hist(data, bins=10, color='red', alpha=0.7)
plt.title("Histogram of Sample Data")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.grid(True)

plt.show()