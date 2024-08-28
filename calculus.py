import sympy as smp
import numpy as np
# from sympy import * 
import matplotlib.pyplot as plt



x, y = smp.symbols('x y')

def f(x,a,b,c):
  return a*x**2+b*x+c

xlist = np.linspace(-10,10, num = 1000)
ylist = f(xlist, 3,1,4)

plt.figure(num=0, dpi=120)

plt.plot(xlist,ylist)

plt.show()




# xlist =np.linspace(-10,10, num = 1000)
# xlist2 = np.arange(-10,10,-1)

# # print(xlist)
# print(xlist2)



# print(exp(x))
# print(log(x,10))

# print(smp.asin(x))

import matplotlib.pyplot as plt

# # Sample data
# x = [1, 2, 3, 4, 5]
# y = [2, 3, 5, 7, 11]

# # Create the plot
# plt.plot(x, y)

# # Show the plot
# plt.show()




