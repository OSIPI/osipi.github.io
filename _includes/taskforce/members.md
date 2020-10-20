<ul>
{% for member in include.members %}
    {%- if member.name -%}
    <li> <p style="line-height:1rem; margin-bottom:0.1rem">
        <b> {{ member.name }} </b>
        {%- if member.website -%}
             <sup> <a class="icon-export"  href="{{ member.website }}" style="border-bottom:none"></a> </sup>
        {%- endif -%} 
        {%- if member.location -%}
            <br/> {{ member.location }}
        {%- endif -%}
        {%- if member.email -%}
            <br/> <a href="mailto:{{ member.email }}">{{ member.email }}</a> <br/>
        {%- endif -%}
    </p> </li>
    {%- else -%}
        <li> {{ member }} </li> 
    {%- endif -%}
{% endfor %}
</ul>
