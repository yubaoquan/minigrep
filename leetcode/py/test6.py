def is_odd(n):
    return n % 2 == 1

L = list(filter(lambda x: x % 2 == 1, range(1, 20)))

print(L)
