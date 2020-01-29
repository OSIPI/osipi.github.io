{% assign taskforce = site.data.tf[page.tf] %}

### Task force aims

{{ taskforce.aims }}
---

### Task force description

{{ taskforce.description }}
---

{% if taskforce.leads %}

### Task force leads

{% for lead in taskforce.leads %}
<div style="display:flex">
    <figure style="margin-bottom:1rem">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/img/{{ lead.photo }}" 
        style="border-radius:50%; width:75px">
    </figure>
    <div style="padding-left:1rem; padding-top:0.5rem">
        <p style="margin-bottom:0.1rem">
            <b>Co-lead</b> <br/>
        </p>
        <p style="line-height:1rem; margin-bottom:0">
            <a href="{{ lead.website }}" style="border-bottom:none">
                <b>{{ lead.name }}</b> <br/>
                <span style="font-weight: normal"> 
                    {{ lead.location }}
                </span>
            </a>
        </p>
    </div>
</div>
{% endfor %}
{% endif %}

{% if taskforce.members %}
---

### Task force members 

<ul>
{% for member in taskforce.members %}
    <li> {{ member }} </li> 
{% endfor %}
</ul>
{% endif %}
---

### Task force status  

<ul>
{% for status in taskforce.status %}
    <li> {{ status }} </li> 
{% endfor %}
</ul>

{% if taskforce.links %}
---

### Task force members links

<ul>
{% for links in taskforce.links %}
    <li>
        <a class="icon-export"  href="{{ links.website }}" style="border-bottom:none"></a>
        <span style="font-weight: normal"> 
            {{ links.description }}
        </span>
    </li>
{% endfor %}
</ul>
{% endif %}


{% if taskforce.resources %}
---

### Public resources

<ul>
{% for resource in taskforce.resources %}
    <li>
        <a class="icon-export"  href="{{ resource.website }}" style="border-bottom:none"></a>
        <span style="font-weight: normal"> 
            {{ resource.description }}
        </span>
    </li>
{% endfor %}
</ul>
{% endif %}