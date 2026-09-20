#include <stdio.h> //la solucion de recaman

int main()
{
    int n = 100;
    int recaman[100];
    recaman[0] = 0; // El prime elemento siempre es 0 desde aui iniciamos

    for (int i = 1; i < n; i++)
    {
        int candidato = recaman[i - 1] - i;
        int existe = 0;
        for (int j = 0; j < i; j++)
        {
            if (recaman[j] == candidato)
            {
                existe = 1;
                break;
            }
        }
        // Si es mayor a 0
        if (candidato > 0 && !existe)
        {
            recaman[i] = candidato;
        }
        else
        {
            recaman[i] = recaman[i - 1] + i;
        }
    }
    // muestra los numeros.
    for (int i = 0; i < n; i++)
    {
        printf("%d ", recaman[i]);
    }

    return 0;
}