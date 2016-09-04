// https://www.hackerrank.com/challenges/plus-minus/

package main
import "fmt"

func plusMinus(a []int) {
	var p,n,z float32
	for i := 0; i < len(a); i++ {
		if a[i] > 0 {
			p++
		} else if a[i] < 0{
			n++
		} else {
			z++
		}
	}
	fmt.Printf("%0.6f\n",p / float32(len(a)))
	fmt.Printf("%0.6f\n",n / float32(len(a)))
	fmt.Printf("%0.6f\n",z / float32(len(a)))
}

func main() {
	
	var n,v int;
	var a []int;
	_, error := fmt.Scanln(&n)
	
	if error == nil {
		for i := 0; i < n; i++ {
			_, error2 := fmt.Scan(&v)
			if error2 == nil {
				a = append(a,v)
			}
		}
		plusMinus(a)
	}
}
