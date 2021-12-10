object DescendantFinder extends App{
  //Goal: Return all descendants of a given Person by FirstName, MiddleName, and LastName.
  // The persons first name whom you are to fetch the descendants of will be provided.
  // You make assume there are no duplicate first names.
  // Handle cases in which the name does not exist or the user does not have any descendants.

    val familyTreeGenerator: List[Person] = {
      List(Person(id = 1, firstName = "John", middleName = Some("Smith"), lastName = "Doe", descendants = Some(List(Person(id = 3, firstName = "Johnny", middleName = None, lastName = "Doe", descendants = None), Person(id = 4, firstName = "Mary", middleName = Some("Ann"), lastName = "Miller", descendants = Some(List(Person(id = 7, firstName = "Robby", middleName = Some("Mark"), lastName = "Miller", descendants = None), Person(id = 8, firstName = "Jon", middleName = None, lastName = "Miller", descendants = None)))), Person(id = 6, firstName = "Lee", middleName = Some("Robert"), lastName = "Doe", descendants = None)))), //GrandDad/Dad
        Person(id = 2, firstName = "Jane", middleName = Some("Robert"), lastName = "Doe", descendants = Some(List(Person(id = 3, firstName = "Johnny", middleName = None, lastName = "Doe", descendants = None), Person(id = 4, firstName = "Mary", middleName = Some("Ann"), lastName = "Miller", descendants = Some(List(Person(id = 7, firstName = "Robby", middleName = Some("Mark"), lastName = "Miller", descendants = None), Person(id = 8, firstName = "Jon", middleName = None, lastName = "Miller", descendants = None)))), Person(id = 6, firstName = "Lee", middleName = Some("Robert"), lastName = "Doe", descendants = None)))), //GrandMother/Mother
        Person(id = 5, firstName = "Robert", middleName = Some("Jon"), lastName = "Miller", descendants = Some(List(Person(id = 7, firstName = "Robby", middleName = Some("Mark"), lastName = "Miller", descendants = None), Person(id = 8, firstName = "Jon", middleName = None, lastName = "Miller", descendants = None)))), //Husband of Mary
      )
    }

    val member = "John"
    //  val member = "Jon"
    //  val member = "Robert"
    //Handle when the name does not exist
    //  val member = "Gabe"

}

case class Person(id: Int,
                  firstName: String,
                  middleName: Option[String],
                  lastName: String,
                  descendants: Option[List[Person]])