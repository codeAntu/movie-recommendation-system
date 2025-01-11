interface Movie {
  title: string;
  genre: string[];
  mood: string[];
  duration: string;
  description: string;
}

const movies: Movie[] = [
  
    {
      "title": "Inception",
      "genre": ["Action", "Sci-Fi", "Thriller"],
      "duration": "Long",
      "mood": ["Excited"],
      "description": "A skilled thief steals secrets from the subconscious during the dream state, risking his life for redemption."
    },
    {
      "title": "The Shawshank Redemption",
      "genre": ["Drama"],
      "duration": "Long",
      "mood": ["Sad", "Happy"],
      "description": "Two imprisoned men bond over the years, finding redemption through acts of decency."
    },
    {
      "title": "The Dark Knight",
      "genre": ["Action", "Drama", "Thriller"],
      "duration": "Long",
      "mood": ["Excited"],
      "description": "Batman faces the Joker, a criminal mastermind who unleashes chaos on Gotham."
    },
    {
      "title": "Forrest Gump",
      "genre": ["Drama", "Comedy", "Romantic"],
      "duration": "Long",
      "mood": ["Happy"],
      "description": "The story of Forrest Gump, a man with a low IQ who accomplishes extraordinary things."
    },
    {
      "title": "Interstellar",
      "genre": ["Sci-Fi", "Drama"],
      "duration": "Long",
      "mood": ["Excited", "Happy"],
      "description": "A team of explorers travels through a wormhole in space to ensure humanity's survival."
    },
    {
      "title": "The Matrix",
      "genre": ["Action", "Sci-Fi", "Thriller"],
      "duration": "Medium",
      "mood": ["Excited"],
      "description": "A computer hacker learns the shocking truth about his reality and his role in the war against its controllers."
    },
    {
      "title": "The Godfather",
      "genre": ["Drama", "Crime"],
      "duration": "Long",
      "mood": ["Sad"],
      "description": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
    },
    {
      "title": "The Avengers",
      "genre": ["Action", "Sci-Fi", "Thriller"],
      "duration": "Long",
      "mood": ["Excited", "Happy"],
      "description": "Earth's mightiest heroes unite to save the world from a global threat."
    },
    {
      "title": "Titanic",
      "genre": ["Drama", "Romantic"],
      "duration": "Long",
      "mood": ["Sad"],
      "description": "A romance blossoms between a wealthy young woman and a poor artist on the ill-fated Titanic."
    },
    {
      "title": "Get Out",
      "genre": ["Horror", "Thriller"],
      "duration": "Medium",
      "mood": ["Excited"],
      "description": "A young African-American man uncovers disturbing secrets when he visits his white girlfriend's family estate."
    },
    {
      "title": "Toy Story",
      "genre": ["Comedy", "Drama"],
      "duration": "Medium",
      "mood": ["Happy"],
      "description": "A cowboy doll is threatened when a new spaceman figure supplants him as top toy."
    },
    {
      "title": "Pulp Fiction",
      "genre": ["Drama", "Crime", "Thriller"],
      "duration": "Long",
      "mood": ["Excited"],
      "description": "The lives of two mob hitmen, a boxer, and others intertwine in tales of crime and redemption."
    },
    {
      "title": "The Lion King",
      "genre": ["Drama", "Comedy"],
      "duration": "Medium",
      "mood": ["Happy", "Sad"],
      "description": "A young lion prince flees his kingdom only to learn the meaning of responsibility and bravery."
    },
    {
      "title": "Jurassic Park",
      "genre": ["Action", "Sci-Fi"],
      "duration": "Medium",
      "mood": ["Excited"],
      "description": "A theme park showcases living dinosaurs but things take a deadly turn when security systems fail."
    },
    {
      "title": "Parasite",
      "genre": ["Drama", "Thriller"],
      "duration": "Long",
      "mood": ["Excited"],
      "description": "A poor family schemes to become employed by a wealthy family and infiltrates their household."
    },
    {
      "title": "La La Land",
      "genre": ["Drama", "Romantic", "Comedy"],
      "duration": "Medium",
      "mood": ["Happy"],
      "description": "Two aspiring artists fall in love while pursuing their dreams in Los Angeles."
    },
    {
      "title": "A Quiet Place",
      "genre": ["Horror", "Thriller"],
      "duration": "Medium",
      "mood": ["Excited"],
      "description": "A family struggles to survive in a world where creatures hunt by sound."
    },
    {
      "title": "Shutter Island",
      "genre": ["Thriller", "Drama"],
      "duration": "Long",
      "mood": ["Excited"],
      "description": "A U.S. Marshal investigates the disappearance of a patient from a hospital for the criminally insane."
    },
    {
      "title": "Zootopia",
      "genre": ["Comedy", "Drama"],
      "duration": "Medium",
      "mood": ["Happy"],
      "description": "A rabbit police officer teams up with a con artist fox to solve a conspiracy in Zootopia."
    },
    {
      "title": "Coco",
      "genre": ["Comedy", "Drama"],
      "duration": "Medium",
      "mood": ["Happy", "Sad"],
      "description": "A young boy dreams of becoming a musician and embarks on an extraordinary journey in the Land of the Dead."
    },
    {
      "title": "Mad Max: Fury Road",
      "genre": ["Action", "Thriller"],
      "duration": "Medium",
      "mood": ["Excited"],
      "description": "In a post-apocalyptic wasteland, a drifter and a rebel warrior team up to overthrow a tyrant."
    },
    {
      "title": "Avengers: Endgame",
      "genre": ["Action", "Sci-Fi"],
      "duration": "Long",
      "mood": ["Excited"],
      "description": "The Avengers assemble one final time to undo the devastation caused by Thanos."
    },
    {
      "title": "Inside Out",
      "genre": ["Comedy", "Drama"],
      "duration": "Medium",
      "mood": ["Happy"],
      "description": "The emotions of a young girl navigate her mind as she faces life changes."
    },
    {
      "title": "It",
      "genre": ["Horror", "Thriller"],
      "duration": "Long",
      "mood": ["Excited"],
      "description": "A group of children confront a shape-shifting evil that preys on their town."
    }
    ,
      {
        "title": "The Social Network",
        "genre": ["Drama"],
        "duration": "Medium",
        "mood": ["Excited"],
        "description": "The story of the creation of Facebook and the legal battles that followed."
      },
      {
        "title": "Whiplash",
        "genre": ["Drama"],
        "duration": "Medium",
        "mood": ["Excited", "Happy"],
        "description": "A young drummer strives for greatness under the guidance of a strict music teacher."
      },
      {
        "title": "Frozen",
        "genre": ["Comedy", "Drama"],
        "duration": "Medium",
        "mood": ["Happy"],
        "description": "A princess sets out on a journey to find her estranged sister whose powers have trapped their kingdom in eternal winter."
      },
      {
        "title": "Black Panther",
        "genre": ["Action", "Drama", "Sci-Fi"],
        "duration": "Long",
        "mood": ["Excited"],
        "description": "T'Challa, heir to the hidden kingdom of Wakanda, must defend his throne and his people."
      },
      {
        "title": "The Prestige",
        "genre": ["Drama", "Thriller"],
        "duration": "Long",
        "mood": ["Excited"],
        "description": "Two rival magicians compete to create the ultimate illusion, leading to deadly consequences."
      },
      {
        "title": "The Grand Budapest Hotel",
        "genre": ["Comedy", "Drama"],
        "duration": "Medium",
        "mood": ["Happy"],
        "description": "A concierge and his protégé are drawn into a murder mystery in a famous European hotel."
      },
      {
        "title": "Spider-Man: Into the Spider-Verse",
        "genre": ["Action", "Comedy"],
        "duration": "Medium",
        "mood": ["Happy", "Excited"],
        "description": "Teenager Miles Morales becomes Spider-Man and teams up with counterparts from other dimensions."
      },
      {
        "title": "The Wolf of Wall Street",
        "genre": ["Drama", "Comedy"],
        "duration": "Long",
        "mood": ["Excited"],
        "description": "A stockbroker rises to wealth through corruption but faces the consequences of his lifestyle."
      },
      {
        "title": "A Star is Born",
        "genre": ["Drama", "Romantic"],
        "duration": "Long",
        "mood": ["Sad"],
        "description": "A seasoned musician helps a young singer find fame as his own career declines."
      },
      {
        "title": "Knives Out",
        "genre": ["Comedy", "Drama", "Thriller"],
        "duration": "Medium",
        "mood": ["Excited"],
        "description": "A detective investigates the mysterious death of a wealthy crime novelist."
      },
      {
        "title": "Moana",
        "genre": ["Comedy", "Drama"],
        "duration": "Medium",
        "mood": ["Happy"],
        "description": "A young Polynesian girl sets out on a daring journey to save her island with the help of a demigod."
      },
      {
        "title": "Doctor Strange",
        "genre": ["Action", "Sci-Fi"],
        "duration": "Medium",
        "mood": ["Excited"],
        "description": "A brilliant surgeon learns the mystic arts after a car accident ends his career."
      },
      {
        "title": "Joker",
        "genre": ["Drama", "Thriller"],
        "duration": "Long",
        "mood": ["Sad"],
        "description": "An aspiring comedian's descent into madness sparks a violent revolution in Gotham City."
      },
      {
        "title": "The Conjuring",
        "genre": ["Horror", "Thriller"],
        "duration": "Medium",
        "mood": ["Excited"],
        "description": "Paranormal investigators help a family terrorized by a dark presence in their farmhouse."
      },
      {
        "title": "Up",
        "genre": ["Comedy", "Drama"],
        "duration": "Medium",
        "mood": ["Happy"],
        "description": "An old man fulfills a lifelong dream by tying balloons to his house and flying to South America."
      },
      {
        "title": "The Incredibles",
        "genre": ["Action", "Comedy"],
        "duration": "Medium",
        "mood": ["Happy", "Excited"],
        "description": "A family of superheroes comes out of retirement to fight a new villain."
      },
      {
        "title": "Logan",
        "genre": ["Action", "Drama"],
        "duration": "Long",
        "mood": ["Sad", "Excited"],
        "description": "An aging Wolverine cares for ailing Professor X while protecting a young mutant."
      },
      {
        "title": "The Hunger Games",
        "genre": ["Action", "Drama", "Sci-Fi"],
        "duration": "Medium",
        "mood": ["Excited"],
        "description": "In a dystopian future, a girl volunteers to take her sister's place in a deadly televised competition."
      },
      {
        "title": "Coco",
        "genre": ["Comedy", "Drama"],
        "duration": "Medium",
        "mood": ["Happy", "Hopeful"],
        "description": "A young boy dreams of becoming a musician and explores the Land of the Dead."
      },
      {
        "title": "Avatar",
        "genre": ["Action", "Sci-Fi"],
        "duration": "Long",
        "mood": ["Excited"],
        "description": "A marine on an alien planet becomes torn between his mission and the people he has come to respect."
      },
      {
        "title": "Ratatouille",
        "genre": ["Comedy", "Drama"],
        "duration": "Medium",
        "mood": ["Happy", "Hopeful"],
        "description": "A rat who dreams of becoming a chef makes an unusual alliance with a young kitchen worker."
      },
      {
        "title": "Hereditary",
        "genre": ["Horror", "Drama"],
        "duration": "Long",
        "mood": ["Sad", "Excited"],
        "description": "A family is haunted by tragic and disturbing occurrences after the death of their matriarch."
      },
      {
        "title": "WALL-E",
        "genre": ["Comedy", "Sci-Fi"],
        "duration": "Medium",
        "mood": ["Happy", "Hopeful"],
        "description": "A lonely robot embarks on a journey to restore life on Earth."
      },
      {
        "title": "Frozen II",
        "genre": ["Comedy", "Drama"],
        "duration": "Medium",
        "mood": ["Happy", "Hopeful"],
        "description": "Elsa, Anna, and their friends venture into the enchanted forest to discover the origin of Elsa's powers."
      },
      {
        "title": "The Lego Movie",
        "genre": ["Comedy", "Action"],
        "duration": "Medium",
        "mood": ["Happy"],
        "description": "An ordinary Lego figure is mistaken for a prophesied savior and embarks on an epic journey."
      }
    
  
  
  
]

  

export default movies;
