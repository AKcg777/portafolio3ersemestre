import java.util.Scanner;

public class AnalisisPuntosTriangulo {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Ingrese coordenadas del punto A (x1 y1):");
            double x1 = scanner.nextDouble(), y1 = scanner.nextDouble();
            System.out.println("Ingrese coordenadas del punto B (x2 y2):");
            double x2 = scanner.nextDouble(), y2 = scanner.nextDouble();
            System.out.println("Ingrese coordenadas del punto C (x3 y3):");
            double x3 = scanner.nextDouble(), y3 = scanner.nextDouble();

            // Cálculo de distancias euclidianas
            double ab = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            double bc = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
            double ac = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));

            double area = 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
            if (area < 1e-9) {
                System.out.println("Los puntos ESTÁN ALINEADOS.");
            } else {
                double perimetro = ab + bc + ac;
                System.out.println("Perímetro del triángulo: " + perimetro);
            }
        }
    }
}