import random
import time


lista = []
count = 0
#criar cartela
user1 = random.sample(range(0, 51), 5)
print(f'Sua cartela possui os seguintes números {user1}')

#criar lista
for x in range(1,51):
    lista.append(x)
random.shuffle(lista)

#bola do globo
print(f'O 1º número a sair foi {lista[0]}')
for i in range(2,51):
    time.sleep(1)
    if lista[0] in user1:
        count += 1
        print(f'Você possui o número {lista[0]} em sua cartela')
    if count == 5:
        print('BINGO!')
        break    
    else:
        lista.pop(0)
        print(f'O {i}º número a sair foi {lista[0]}')
print('O jogo acabou !!!')