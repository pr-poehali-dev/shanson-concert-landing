import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);

  const songs = [
    { title: "Владимирский централ", artist: "Михаил Круг", duration: "3:42" },
    { title: "Мурка", artist: "Аркадий Северный", duration: "2:58" },
    { title: "Вальс-бостон", artist: "Александр Розенбаум", duration: "4:15" },
    { title: "Кони привередливые", artist: "Владимир Высоцкий", duration: "3:28" },
    { title: "Гоп-стоп", artist: "Александр Розенбаум", duration: "3:52" },
  ];

  const program = [
    { time: "19:00", title: "Открытие концерта", artist: "Ведущий" },
    { time: "19:15", title: "Золотые хиты", artist: "Михаил Круг" },
    { time: "19:45", title: "Легенды жанра", artist: "Аркадий Северный" },
    { time: "20:30", title: "Антракт", artist: "" },
    { time: "21:00", title: "Романсы и баллады", artist: "Александр Розенбаум" },
    { time: "21:45", title: "Вечная классика", artist: "Владимир Высоцкий" },
    { time: "22:30", title: "Закрытие концерта", artist: "Финальный акт" },
  ];

  const tickets = [
    { category: "VIP", price: "5 000", features: ["Первые ряды", "Фуршет", "Сувенир"] },
    { category: "Партер", price: "3 000", features: ["Центральные места", "Гардероб", "Программка"] },
    { category: "Балкон", price: "1 500", features: ["Боковые места", "Гардероб"] },
  ];

  const gallery = [
    "https://cdn.poehali.dev/projects/71da9553-e751-470f-bce4-7e23a05d50de/files/c8332cae-d372-44ce-9e4a-be245a2974d6.jpg",
    "https://cdn.poehali.dev/projects/71da9553-e751-470f-bce4-7e23a05d50de/files/ff5eedf6-e81e-4ea9-9e8e-8e94124608f4.jpg",
    "https://cdn.poehali.dev/projects/71da9553-e751-470f-bce4-7e23a05d50de/files/da1fef40-439c-4c67-b826-0df42c8473aa.jpg",
    "https://cdn.poehali.dev/projects/71da9553-e751-470f-bce4-7e23a05d50de/files/c8332cae-d372-44ce-9e4a-be245a2974d6.jpg",
    "https://cdn.poehali.dev/projects/71da9553-e751-470f-bce4-7e23a05d50de/files/ff5eedf6-e81e-4ea9-9e8e-8e94124608f4.jpg",
    "https://cdn.poehali.dev/projects/71da9553-e751-470f-bce4-7e23a05d50de/files/da1fef40-439c-4c67-b826-0df42c8473aa.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${gallery[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] mb-4 animate-shine bg-[length:200%_auto]">
                ВЕЧЕР ШАНСОНА
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-[#f5f5dc] mb-4 font-light">
            Классика жанра в исполнении Дмитрия Макарова
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-12">
            <div className="flex items-center gap-3">
              <Icon name="Calendar" className="text-[#d4af37]" size={28} />
              <span className="text-2xl text-[#f5f5dc]">15 марта 2026</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-[#d4af37]" />
            <div className="flex items-center gap-3">
              <Icon name="Clock" className="text-[#d4af37]" size={28} />
              <span className="text-2xl text-[#f5f5dc]">19:00</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-[#d4af37]" />
            <div className="flex items-center gap-3">
              <Icon name="MapPin" className="text-[#d4af37]" size={28} />
              <span className="text-2xl text-[#f5f5dc]">Концертный Зал "Классика"</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black hover:opacity-90 transition-opacity text-xl px-12 py-7 rounded-sm font-semibold"
          >
            <Icon name="Ticket" className="mr-2" size={24} />
            Купить билеты
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-[#d4af37]" size={40} />
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5dc] mb-4">О Концерте</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-[#f5f5dc]/90 text-lg leading-relaxed animate-fade-in">
              <p>
                Приглашаем вас на незабываемый вечер в честь классического русского шансона. 
                Погрузитесь в атмосферу легендарных мелодий, которые прошли через десятилетия 
                и остались в сердцах миллионов.
              </p>
              <p>
                В программе — хиты от величайших исполнителей жанра, исполненные лучшими артистами 
                современности. Концертный зал "Классика" создаст идеальную акустику для наслаждения 
                каждой нотой.
              </p>
              <p>
                Это не просто концерт — это возвращение к истокам, к тем песням, которые знает 
                каждый. Приходите всей семьёй, с друзьями — и вместе переживите магию шансона.
              </p>
            </div>
            
            <div className="relative group animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <img 
                src={gallery[1]} 
                alt="Концерт" 
                className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5dc] mb-4">Программа Концерта</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto" />
          </div>

          <div className="space-y-4">
            {program.map((item, index) => (
              <Card 
                key={index} 
                className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#d4af37] transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div className="text-3xl font-bold text-[#d4af37] min-w-[80px]">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-[#f5f5dc] mb-1">
                          {item.title}
                        </h3>
                        {item.artist && (
                          <p className="text-[#f5f5dc]/70">
                            {item.artist}
                          </p>
                        )}
                      </div>
                    </div>
                    <Icon name="Music" className="text-[#d4af37]" size={32} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-[#0f0f0f] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5dc] mb-4">Билеты</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tickets.map((ticket, index) => (
              <Card 
                key={index} 
                className="bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-[#d4af37] transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <h3 className="text-3xl font-bold text-[#d4af37] mb-2">
                    {ticket.category}
                  </h3>
                  <div className="my-6">
                    <span className="text-5xl font-bold text-[#f5f5dc]">{ticket.price}</span>
                    <span className="text-xl text-[#f5f5dc]/70 ml-2">₽</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center gap-2 text-[#f5f5dc]/90">
                        <Icon name="Check" className="text-[#d4af37]" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black hover:opacity-90 transition-opacity font-semibold"
                    size="lg"
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5dc] mb-4">Галерея</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto mb-4" />
            <p className="text-[#f5f5dc]/70 text-lg">Моменты с прошлых концертов</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-[#0f0f0f] to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5dc] mb-4">Послушайте</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto mb-4" />
            <p className="text-[#f5f5dc]/70 text-lg">Популярные композиции вечера</p>
          </div>

          <div className="space-y-4">
            {songs.map((song, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#d4af37] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <Button
                      size="icon"
                      className={`rounded-full w-14 h-14 transition-all ${
                        currentTrack === index
                          ? 'bg-[#d4af37] hover:bg-[#f4d03f]'
                          : 'bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:opacity-90'
                      }`}
                      onClick={() => setCurrentTrack(currentTrack === index ? null : index)}
                    >
                      <Icon
                        name={currentTrack === index ? "Pause" : "Play"}
                        className="text-black"
                        size={24}
                      />
                    </Button>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#f5f5dc] mb-1">
                        {song.title}
                      </h3>
                      <p className="text-[#f5f5dc]/70">{song.artist}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-[#d4af37] font-mono">{song.duration}</span>
                      <Icon name="Music2" className="text-[#d4af37]" size={24} />
                    </div>
                  </div>

                  {currentTrack === index && (
                    <div className="mt-6">
                      <div className="relative h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full animate-pulse"
                          style={{ width: '45%' }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5f5dc] mb-4">Контакты</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#d4af37] transition-colors animate-scale-in">
              <CardContent className="p-8 text-center">
                <Icon name="MapPin" className="text-[#d4af37] mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-[#f5f5dc] mb-2">Место проведения</h3>
                <p className="text-[#f5f5dc]/70">
                  Концертный Зал "Классика"<br />
                  ул. Театральная, 15<br />
                  Москва
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#d4af37] transition-colors animate-scale-in" style={{ animationDelay: '0.15s' }}>
              <CardContent className="p-8 text-center">
                <Icon name="Phone" className="text-[#d4af37] mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-[#f5f5dc] mb-2">Телефон</h3>
                <p className="text-[#f5f5dc]/70">
                  +7 (495) 123-45-67<br />
                  Ежедневно с 10:00 до 22:00
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#d4af37] transition-colors animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <Icon name="Mail" className="text-[#d4af37] mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-[#f5f5dc] mb-2">Email</h3>
                <p className="text-[#f5f5dc]/70">
                  info@klassika-hall.ru<br />
                  tickets@klassika-hall.ru
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <p className="text-[#f5f5dc]/70 mb-6">Следите за новостями в наших социальных сетях</p>
            <div className="flex justify-center gap-6">
              <Button variant="outline" size="icon" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors">
                <Icon name="Youtube" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-black border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center text-[#f5f5dc]/50">
          <p>© 2026 Концертный Зал "Классика". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;