import random
import time

lista = []
count = 0
countm = 0

#criar cartela
user1 = random.sample(range(0, 51), 5)
print(f'Sua cartela possui os seguintes números {user1}')

#criar lista
for x in range(1,51):
    lista.append(x)
random.shuffle(lista)

#modo de jogo
modo = input('Digite M para jogar no modo manual e A para jogar no modo automático')
if modo == 'M':
    print('Você selecionou o modo manual')
    print('O jogo irá começar')
    time.sleep(3)
    print(f'O 1º número a sair foi {lista[0]} || Sua cartela {user1}')
    check = input('Você possui esse número em sua cartela ? (Digite S para sim e N para não)')
    if check == 'S' and lista[0] in user1:
            countm += 1
    elif check == 'N' or check == 'S':
            lista.pop(0)        
    for w in range(2,52):
        print(f'O {w}º número a sair foi {lista[0]} || Sua cartela {user1} ')
        check = input('Você possui esse número em sua cartela ? (Digite S para sim e N para não)')
        if check == 'S' and lista[0] in user1:
            countm += 1
            print(f'Você MARCOU o número {lista[0]} em sua cartela')
        if check == 'N' or check == 'S':
            lista.pop(0)
        if countm == 5:
            print('BINGO')
            break
        
elif modo == 'A':
    print('Você selecionou o modo automático')
    print('O jogo irá começar')
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
else:
    print('Você não selecionou nenhum modo de jogo, logo irá rodar no modo automático')
print('O jogo acabou !!!')