#include <stdio.h>

int main()
{
    int numero;
    int binario[32];
    int i = 0;

    printf("Ingrese un numero entero positivo: ");
    scanf("%d", &numero);

    if (numero < 0)
    {
        printf("Por favor ingrese solo numeros positivos.\n");
        return 0;
    }

    // Caso especial para el numero 0
    if (numero == 0)
    {
        printf("El numero en binario es: 0\n");
        return 0;
    }

    // Proceso de conversion guardando el residuo en el arreglo
    while (numero > 0)
    {
        binario[i] = numero % 2;
        numero = numero / 2;
        i++;
    }

    // Impresion de los bits en orden inverso
    printf("El numero en binario es: ");
    for (int j = i - 1; j >= 0; j--)
    {
        printf("%d", binario[j]);
    }
    printf("\n");

    return 0;
}