import React from 'react'
import BlogsCard from './BlogsCard'
import Img1 from './../assets/blogimage1.jpg'
import Img2 from './../assets/blogimage2.jpg'
import Img3 from './../assets/blogimage3.jpg'



const BlogComponents = () => {
const BlogData = [
  {
    id: 1,
    image:Img1,
    title: 'The 10 best places to visit Nepal',
    content: 'Nepal is a land of stunning natural beauty, rich culture, and spiritual heritage. Here are the top 10 places to visit - 1. kathmandu Valley: A UNESCO World Heritage Site featuring ancient temples, palaces, and stupas like Swayambhunath, Boudhanath, and Pashupatinath Temple.  2.Pokhara: Known for tranquil lakes (Phewa Lake), mountain views, and serene spots like the World Peace Pagoda and Sarangkot. 3.Chitwan National Park: A haven for wildlife enthusiasts with jungle safaris, canoeing, and sightings of rhinos and tigers. 4. Lumbini: The birthplace of Lord Buddha, home to the Maya Devi Temple and various monasteries.5. Everest Base Camp (EBC): A trekking paradise with breathtaking views of Mount Everest and the surrounding peaks. 6. Annapurna Circuit & Annapurna Base Camp: Popular trekking routes with diverse landscapes, cultural villages, and stunning mountain vistas. 7.Nagarkot: A hill station near Kathmandu offering spectacular sunrise views of the Himalayas. 8.Bandipur: A charming hilltop town with Newari architecture, panoramic views, and Nepal’s largest cave, Siddha Gufa. 9.Gosaikunda Lake: A sacred alpine lake in Langtang National Park, known for its serene beauty and trekking trails.10.Rara Lake: The largest lake in Nepal, located in a remote region surrounded by pristine nature and Rara National Park. Nepal offers something for every traveler, from cultural exploration to adventure and natural serenity. Start your journey to this Himalayan gem!',
    author: 'Aarya',
    date: 'January 2025',
  
  },

  {
    id: 2,
    image:Img2,
    title: 'The 10 best views in Nepal',
    content: 'Nepal offers some of the worlds most stunning views, showcasing its Himalayan peaks, serene lakes, and picturesque landscapes. Here are the highlights: 1. Mount Everest from Kala Patthar: Iconic sunrise views of Everest, Nuptse, and Lhotse. 2. Annapurna Range from Sarangkot: Panoramic views of Annapurna, Machhapuchhre, and Dhaulagiri during sunrise. 3. Rara Lake: A tranquil lake surrounded by snow-capped peaks. 4. Phewa Lake and Machhapuchhre: Reflective lake views with the majestic Fishtail Mountain. 5.Nagarkot: Sweeping Himalayan views, including Everest, especially at sunrise. 6.Gosaikunda Lake: A sacred alpine lake surrounded by rugged peaks. 7.Dhaulagiri Icefall: A dramatic sight for trekkers on the Dhaulagiri Circuit. 8.Langtang Valley: Scenic views of Langtang Lirung and a vibrant valley. 9.Everest from Tengboche Monastery: Spiritual and scenic views of Everest and Ama Dablam. 10.Upper Mustang: Striking desert landscapes with Himalayan backdrops.',
    author: 'Aarya',
    date: 'January 2025',
  
  },

  {
    id: 3,
    image:Img3,
    title: '**World’s Unique Things Found in Nepal**',
    content: 'Nepal is a small yet extraordinary country with natural, cultural, and historical treasures found nowhere else. Here are some of the highlights:---### 1. **Mount Everest (Sagarmatha)**   - The world’s highest peak, attracting adventurers and symbolizing human endurance.---### 2. **Lumbini: Birthplace of Lord Buddha**   - A UNESCO World Heritage Site with sacred landmarks like the Maya Devi Temple.---### 3. **The Kali Gandaki Gorge**  - The deepest gorge in the world, rich in ancient fossils (Shaligrams).---### 4. **Yarchagumba (Cordyceps Sinensis)**  - A rare medicinal fungus, known as Himalayan Viagra, found in high-altitude regions.---### 5. **Living Goddess (Kumari)**  - A young girl worshipped as a living goddess, an ancient and unique tradition.---### 6. **Nepali Flag**  - The only non-rectangular national flag, symbolizing the Himalayas and harmony of religions.---### 7. **The Rhododendron Forests**  - Stunning spring landscapes with Nepal’s national flower blooming in abundance.---### 8. **One-Horned Rhinoceros**   - A rare species thriving in Chitwan and Bardia National Parks, thanks to conservation efforts.---### 9. **Rara Lake**  - Nepal’s largest freshwater lake, celebrated for its untouched beauty.---### 10. **Sky Caves of Mustang**  - Ancient man-made caves with murals, artifacts, and archaeological significance.---### Conclusion Nepal’s uniqueness lies in its natural wonders, cultural heritage, and historic traditions. From Mount Everest to ancient caves, Nepal is a testament to the world’s diversity and beauty.',
    author: 'Aarya',
    date: 'January 2025',
  
  },

//   {
//     id: 4,
//     image:'',
//     title: 'The 10 best places to visit Nepal',
//     content: 'Nepal is a land of stunning natural beauty, rich culture, and spiritual heritage. Here are the top 10 places to visit - 1. kathmandu Valley: A UNESCO World Heritage Site featuring ancient temples, palaces, and stupas like Swayambhunath, Boudhanath, and Pashupatinath Temple.  2.Pokhara: Known for tranquil lakes (Phewa Lake), mountain views, and serene spots like the World Peace Pagoda and Sarangkot. 3.Chitwan National Park: A haven for wildlife enthusiasts with jungle safaris, canoeing, and sightings of rhinos and tigers. 4. Lumbini: The birthplace of Lord Buddha, home to the Maya Devi Temple and various monasteries.5. Everest Base Camp (EBC): A trekking paradise with breathtaking views of Mount Everest and the surrounding peaks. 6. Annapurna Circuit & Annapurna Base Camp: Popular trekking routes with diverse landscapes, cultural villages, and stunning mountain vistas. 7.Nagarkot: A hill station near Kathmandu offering spectacular sunrise views of the Himalayas. 8.Bandipur: A charming hilltop town with Newari architecture, panoramic views, and Nepal’s largest cave, Siddha Gufa. 9.Gosaikunda Lake: A sacred alpine lake in Langtang National Park, known for its serene beauty and trekking trails.10.Rara Lake: The largest lake in Nepal, located in a remote region surrounded by pristine nature and Rara National Park. Nepal offers something for every traveler, from cultural exploration to adventure and natural serenity. Start your journey to this Himalayan gem!',
//     author: 'Aarya',
//     date: 'January 2025',
  
//   },

//   {
//     id: 5,
//     image:'',
//     title: 'The 10 best places to visit Nepal',
//     content: 'Nepal is a land of stunning natural beauty, rich culture, and spiritual heritage. Here are the top 10 places to visit - 1. kathmandu Valley: A UNESCO World Heritage Site featuring ancient temples, palaces, and stupas like Swayambhunath, Boudhanath, and Pashupatinath Temple.  2.Pokhara: Known for tranquil lakes (Phewa Lake), mountain views, and serene spots like the World Peace Pagoda and Sarangkot. 3.Chitwan National Park: A haven for wildlife enthusiasts with jungle safaris, canoeing, and sightings of rhinos and tigers. 4. Lumbini: The birthplace of Lord Buddha, home to the Maya Devi Temple and various monasteries.5. Everest Base Camp (EBC): A trekking paradise with breathtaking views of Mount Everest and the surrounding peaks. 6. Annapurna Circuit & Annapurna Base Camp: Popular trekking routes with diverse landscapes, cultural villages, and stunning mountain vistas. 7.Nagarkot: A hill station near Kathmandu offering spectacular sunrise views of the Himalayas. 8.Bandipur: A charming hilltop town with Newari architecture, panoramic views, and Nepal’s largest cave, Siddha Gufa. 9.Gosaikunda Lake: A sacred alpine lake in Langtang National Park, known for its serene beauty and trekking trails.10.Rara Lake: The largest lake in Nepal, located in a remote region surrounded by pristine nature and Rara National Park. Nepal offers something for every traveler, from cultural exploration to adventure and natural serenity. Start your journey to this Himalayan gem!',
//     author: 'Aarya',
//     date: 'January 2025',
  
//   }
]

  return (
    <div >
        <div data-aos = "fade-up" data-aos-delay = "300"
        className='container'>
           <h1 className=' mb-8 border-l-8 border-primary py-2 pl-2 text-3xl font-bold'> Our Latest Blogs</h1>
           <div className='grid  gap-x-5 md:grid-cols-3  '>
            {BlogData.map((item, index)=>(
                <BlogsCard 
                key = {index} {... item} />
            ))}
           </div>
        </div>
      
    </div>
  )
}

export default BlogComponents
