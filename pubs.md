---
layout: default
title: Publications
---
<div class="publications-div">
<div class="big-title" style="align: left"><b><span>Pub</span>lications</b></div>
<hr class="solid">
<p class="normal-paragraph"> Find here a (hopefully updated) list of my publications including journals, conferences, and workshops in descending order</p>
<hr>
<h5 class = "less-title"><span>J</span>ournals</h5>
<ul class = "collapsible">
	{% for pub in site.data.journals %}
    {% capture thecycle %}{% cycle 'new-class-collapsible', '' %}{% endcapture %}
    <li>
        <div class = "collapsible-header {{ thecycle }}" style="text-align:left;"><i class="fa fa-angle-down" data-toggle="collapse"></i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}.
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %}
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em> {{ pub.journal }} </em>,
			Volume {{ pub.volume }}
			{% if pub.issue %}
			({{ pub.issue }}),
            {% else %}
            ,
			{% endif %}
			{% if pub.articleid %}
				{{ pub.articleid }},
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }},
			{% endif %}
			{{ pub.date }}.
            {{ pub.publisher }}.
			{% if pub.doi %}
			DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a>
    		{% endif %}
				<br>
				{% if pub.quality %}
				<br>
						Journal metrics:
				<br>
			{% for q in pub.quality %}
								{{ q }}
								<br>
						{% endfor %}
		{% endif %}
			</p>
		</div>
        <div class = "collapsible-body abstract {{ thecycle }}">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}
    	</span>
    	</div>
    </li>
    {% endfor %}
</ul>
<hr>
<h5 class = "less-title"><span>C</span>onferences </h5>
<ul class = "collapsible">
	{% for pub in site.data.conferences %}
    {% capture thecycle %}{% cycle 'new-class-collapsible', '' %}{% endcapture %}
    <li>
        <div class = "collapsible-header {{ thecycle }}" style="text-align:left"><i class="fa fa-angle-down" data-toggle="collapse"></i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}.
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}  
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %}
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em>{{ pub.conference }}</em>,
			{% if pub.book %}
				{{ pub.book }}, Vol. {{ pub.volume }}.
			{% endif %}
			{{ pub.venue }},
            {{ pub.publisher }}
			{{ pub.date }},
			{% if pub.articleid %}
				{{ pub.articleid }}
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }}.
			{% else %}
			.
			{% endif %}
            {{ pub.publisher }}.
			{% if pub.doi %}
			DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a>
    		{% endif %}
            <br>
            {% if pub.quality %}
            <br>
                Conference rating:
            <br>
			    {% for q in pub.quality %}
                    {{ q }}
                    <br>
                {% endfor %}
    		{% endif %}
            </p>
		</div>
        <div class = "collapsible-body abstract {{ thecycle }}" style="text-align:left">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    		{% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}</span>
    	</div>
    </li>
    {% endfor %}
</ul>
<hr>
<h5 class = "less-title"><span>W</span>orkshops</h5>
<ul class = "collapsible">
	{% for pub in site.data.workshops %}
    {% capture thecycle %}{% cycle 'new-class-collapsible', '' %}{% endcapture %}
    <li>
        <div class = "collapsible-header {{ thecycle }}" style="text-align:left"><i class="fa fa-angle-down" data-toggle="collapse"></i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}.
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %}
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em>{{ pub.workshop }}</em> co-located with <em>{{ pub.conference }}</em>.
			{% if pub.book %}
				{{ pub.book }}
				{% if pub.volume %}
					, Vol. {{ pub.volume }}.
				{% else %}
					.
				{% endif %}
			{% endif %}
			{{ pub.venue }},
			{{ pub.date }}
			{% if pub.articleid %}
				{{ pub.articleid }}
			{% endif %}
			{% if pub.pages %}
				, pp. {{ pub.pages }}.
			{% else %}
			.
			{% endif %}
			{% if pub.doi %}
        		DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a>
    		{% endif %}
			</p>
		</div>
        <div class = "collapsible-body abstract {{ thecycle }}">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}
    		</span>
    	</div>
    </li>
    {% endfor %}
</ul>




</div>
