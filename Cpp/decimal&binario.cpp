#include <stdio.h>
// Función corta para imprimir en binario (16 bits)
void binario(int num)
{
    for (int i = 15; i >= 0; i--)
    {
        printf("%d", (num >> i) & 1);
    }
}

int main()
{
    int op, n;
    unsigned long long a = 0, b = 1, c = 1, sig;

    // Ciclo do-while para validar la opción
    do
    {
        printf("1.Fibonacci  2.Tribonacci: \n");
        scanf("%d", &op);

        if (op != 1 && op != 2)
        {
            printf("Opción inválida. Por favor, selecciona 1 o 2.\n\n");
        }
    } while (op != 1 && op != 2);

    printf("Cantidad de terminos: ");
    scanf("%d", &n);

    printf("\nN\tDecimal\tBinario\n");
    printf("-------------------------\n");

    for (int i = 1; i <= n; i++)
    {
        printf("%d\t%llu\t", i, a); // uso de \t para tabular
        binario((int)a);
        printf("\n");
        printf("\a");

        if (op == 1)
        { // Fibonacci
            sig = a + b;
            a = b;
            b = sig;
        }
        else
        { // Tribonacci
            sig = a + b + c;
            a = b;
            b = c;
            c = sig;
        }
    }
    return 0;
}