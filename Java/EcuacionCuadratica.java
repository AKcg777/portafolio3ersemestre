import java.util.Scanner;

public class EcuacionCuadratica {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese coeficientes A, B y C: ");
        double a = sc.nextDouble(), b = sc.nextDouble(), c = sc.nextDouble();
        double discriminante = Math.pow(b, 2) - (4 * a * c);
        if (discriminante >= 0) {
            double x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            double x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
            System.out.println("Raices reales: x1 = " + x1 + ", x2 = " + x2);
        } else {
            System.out.println("La ecuacion tiene raices complejas.");
        }
    }
}