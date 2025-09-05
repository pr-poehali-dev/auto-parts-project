import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [vinCode, setVinCode] = useState('');

  const categories = [
    { id: 1, name: 'Двигатель', icon: 'Cog', count: '2,450 товаров' },
    { id: 2, name: 'Тормозная система', icon: 'Circle', count: '1,230 товаров' },
    { id: 3, name: 'Подвеска', icon: 'Settings', count: '890 товаров' },
    { id: 4, name: 'Электрика', icon: 'Zap', count: '1,560 товаров' },
    { id: 5, name: 'Кузов', icon: 'Car', count: '3,200 товаров' },
    { id: 6, name: 'Масла и жидкости', icon: 'Droplets', count: '567 товаров' },
  ];

  const popularParts = [
    { id: 1, name: 'Тормозные колодки передние', brand: 'Brembo', price: '4,500 ₽', image: 'placeholder' },
    { id: 2, name: 'Масляный фильтр', brand: 'Mann', price: '890 ₽', image: 'placeholder' },
    { id: 3, name: 'Свечи зажигания', brand: 'NGK', price: '1,200 ₽', image: 'placeholder' },
    { id: 4, name: 'Воздушный фильтр', brand: 'Bosch', price: '1,450 ₽', image: 'placeholder' },
  ];

  const advantages = [
    { icon: 'Shield', title: 'Только оригинал', desc: 'Гарантия качества от производителя' },
    { icon: 'Truck', title: 'Быстрая доставка', desc: 'По Москве от 2 часов, по России 1-3 дня' },
    { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Консультации и помощь в подборе' },
    { icon: 'Award', title: '2 года гарантии', desc: 'На все запчасти в нашем магазине' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-heading font-bold text-accent">АвтоЗапчасти</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#selection" className="text-gray-600 hover:text-primary transition-colors">Подбор по авто</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#delivery" className="text-gray-600 hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-heading font-bold text-accent leading-tight">
                Умный подбор <span className="text-primary">автозапчастей</span> по VIN-коду
              </h2>
              <p className="text-xl text-gray-600">
                Найдите именно те детали, которые подходят вашему автомобилю. 
                Гарантия совместимости 100%
              </p>
              
              {/* VIN Search */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-primary/20">
                <h3 className="text-lg font-semibold mb-4 text-accent">Введите VIN-код автомобиля</h3>
                <div className="flex space-x-3">
                  <Input
                    type="text"
                    placeholder="Например: WVWZZZ1JZ3W386752"
                    value={vinCode}
                    onChange={(e) => setVinCode(e.target.value)}
                    className="flex-1 text-lg h-12"
                  />
                  <Button size="lg" className="px-8">
                    <Icon name="Search" className="mr-2" size={20} />
                    Найти запчасти
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">VIN-код находится в техпаспорте или на табличке под капотом</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/881021e3-5607-45f8-a2e5-55f3d80faff0.jpg" 
                alt="Автозапчасти" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-accent mb-4">Каталог запчастей</h2>
            <p className="text-xl text-gray-600">Более 50,000 наименований для всех марок автомобилей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon name={category.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.count}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Parts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-accent mb-4">Популярные запчасти</h2>
            <p className="text-xl text-gray-600">Самые востребованные детали с быстрой доставкой</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularParts.map((part) => (
              <Card key={part.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="h-48 bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <Icon name="Package" size={48} className="text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Badge className="mb-2">{part.brand}</Badge>
                  <h3 className="font-semibold text-accent mb-2">{part.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{part.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl opacity-90">Более 10 лет на рынке автозапчастей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="opacity-80">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-heading font-bold text-accent mb-6">Контактная информация</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">Звонки принимаем 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">г. Москва, ул. Автомобильная, д. 15</p>
                    <p className="text-gray-600">Режим работы: Пн-Пт 9:00-19:00, Сб-Вс 10:00-16:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">info@avtozapchasti.ru</p>
                    <p className="text-gray-600">Ответим в течение часа</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-semibold mb-4">Быстрая консультация</h3>
              <p className="text-gray-600 mb-6">Оставьте заявку и мы поможем подобрать нужные запчасти</p>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Номер телефона" />
                <Input placeholder="Марка и модель авто" />
                <Button className="w-full" size="lg">
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} />
                <h3 className="text-xl font-heading font-bold">АвтоЗапчасти</h3>
              </div>
              <p className="opacity-80">Качественные запчасти для вашего автомобиля по доступным ценам</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 opacity-80">
                <li>Двигатель</li>
                <li>Тормозная система</li>
                <li>Подвеска</li>
                <li>Электрика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 opacity-80">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантии</li>
                <li>Возврат товара</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-80">
                <p>+7 (495) 123-45-67</p>
                <p>info@avtozapchasti.ru</p>
                <p>г. Москва, ул. Автомобильная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-60">
            <p>&copy; 2024 АвтоЗапчасти. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}