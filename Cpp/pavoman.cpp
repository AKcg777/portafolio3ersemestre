#include <stdio.h>

int main()
{
    int n = 100;
    int padovan[100];

    // Casos vase
    padovan[0] = 1;
    padovan[1] = 1;
    padovan[2] = 1;

    // uso for para el arreglo este arreglo me ayuda arecorrer los numeros
    for (int i = 3; i < n; i++)
    {
        padovan[i] = padovan[i - 2] + padovan[i - 3];
    }
    printf("SERIE AQUI \n");
    // muestro en pnatalla
    printf("Serie de Padovan: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", padovan[i]);
    }
    printf("\n");

    return 0;
}