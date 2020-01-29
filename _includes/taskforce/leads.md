{% for lead in include.leads %}
<div style="display:flex">
    <figure style="margin-bottom:1rem">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/img/{{ lead.photo }}" 
        style="border-radius:50%; width:75px">
    </figure>
    <div style="padding-left:1rem; padding-top:0.5rem">
        <p style="margin-bottom:0.1rem">
            <b>{{ lead.role }}</b> <br/>
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