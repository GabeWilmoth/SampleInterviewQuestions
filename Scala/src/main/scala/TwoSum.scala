import scala.annotation.tailrec
import scala.collection.immutable.HashMap

object TwoSum extends App {
    def twoSum(numbers: List[Int], target: Int): List[Int] = {
      //Temp to remove error
      List(1)
    }

  println(twoSum(List(2,7,11,15), 9).mkString(" "))
  println(twoSum(List(3,2,4), 6).mkString(" "))
  println(twoSum(List(3,3), 6).mkString(" "))
}