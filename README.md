# Проект LizaAlert.  
## Платформа для обучения добровольцев  LizaAlert.
### Разработка теста по кинологическому направлению.
***
Добровольческий поисковый отряд  LizaAlert осуществляет поиск пропавших без вести людей силами волонтеров.  
В этих целях регулярно проводится обучение поисковых групп. Указанный проект направлен на создание обучающей платформы
для обучения по кинологическому направлению, в частности, создание теста, завершающего обучение.

Проект реализован студентами Яндекс-Практикума по направлению "Web разработчик +".  
Направлен на закрпеление навыков работы с GitHab, совместную работу в одном репозитории,  
применение навыков верстки, разработку интерактивных элементов на JavaScript.

***
**В проекте реализовано:**

* *Использование лэйаутов grid и flex*
```
	display: grid;
	grid-template-columns: 36px minmax(min-content, calc(25% - 48px)) minmax(min-content, 75%) 36px;
	grid-template-areas:
		"header header header header"
		". page-title page-title . "
		". sidebar-left content ."  
```
* *Использование checkbox*
```html
<label class="checkbox-block checkbox-block_type_test">
	<input class="checkbox-block__input checkbox-block__input_disabled_true checkbox"
	       type="checkbox" value="checkbox-one" name="test-firs" id="checkbox-one">
	<span class="checkbox-block__icon checkbox-block__icon_type_checkbox"></span>
	<span class="checkbox-block__text">
		Оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности
	</span>
</label>
```
* *Формы ввода*
* *Реализована навигация breadcrumbs*  
```html
 <nav class="breadcrumbs" aria-label="breadcrumb">
	<ol class="breadcrumbs__crumbs-list">
		<li class="breadcrumbs__crumb">
			<a class="breadcrumbs__link" href="#">Курсы</a>
		</li>
		<li class="breadcrumbs__crumb">
			<a class="breadcrumbs__link" href="#">Кинологическое направление</a>
		</li>
		<li class="breadcrumbs__crumb">
			<a class="breadcrumbs__link" href="#">5. Работа «второго номера» совместно со следовым кинологическим расчётом</a>
		</li>
		<li class="breadcrumbs__crumb">
			<a class="breadcrumbs__link breadcrumbs__link_type_current" href="#" aria-current="page">Тест</a>
		</li>
	</ol>
</nav>
```
* *Применение префиксов браузеров*
```
.media-player__range[type="range"]::-moz-range-thumb{...}
.media-player__range[type="range"]::-ms-thumb{...}
.media-player__range[type="range"]::-webkit-slider-thumb {...}
-webkit-mask-image: url('../../../../images/lesson-icon.svg');  
```
***
Проект делала группа студентов-разработчиков:
* Фёдор Шенделов
* Дмитрий Ушаков
* Гавриловский Сергей
* Денис Аверченков
* Инна Сердюк




