import requests
from bs4 import BeautifulSoup

i = 0
url = 'https://www.supercarros.com/carros/cualquier-tipo/Distrito%20Nacional/Audi/?YearFrom=2021&YearTo=2023' \
      '&Condition=251&PagingPageSkip=' + str(i)

while True:
    i = i + 1
    if "__main__" == __name__:
        page = requests.get(url)
        if page.status_code != 200:
            break
        url = 'https://www.supercarros.com/carros/cualquier-tipo/Distrito%20Nacional/Audi/?YearFrom=2021&YearTo=2023' \
              '&Condition=251&PagingPageSkip=' + str(i)
        soup = BeautifulSoup(page.content, 'lxml')
        cars = soup.find_all('li', class_='normal')

        if len(cars) == 6 or len(cars) < 6:
            break

        for car in cars:
            try:
                title = car.find('div', class_='title1').get_text()
                title2 = car.find('div', class_='title2').get_text()
                price = car.find('div', class_='price').get_text()
                year = car.find('div', class_='year').get_text()
                link = 'https://www.supercarros.com' + car.a['href']
                car = 'Titulo: {}\nDatos: {}\nPrecio: {}\nYear: {}\nLink: {}\n'.format(title, title2, price, year, link)
                print(car)
            except Exception as e:
                print("Exception: {}".format(e))
                pass
